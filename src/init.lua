--!optimize 2
local RunService = game:GetService("RunService")
local CircularBuffer = require(script:FindFirstChild("CircularBuffer"))
local Signal = require(script:FindFirstChild("Signal"))

--[=[
	If you know the recording software called FRAPS, that's what this is named after. FRAPS is not just a recording software, but it also allows
	benchmarking. It offers a way to view the current framerate on screen and measure the average, max, and min framerates by default, and with
	FRAFS you can also get the 1% and 0.1% lows. RoFraps basically offers all of these for a Roblox use-case, since you can't run FRAPS on anything
	but Windows devices. The reason this is a class is for a singular state. You can convert it into a classless module if you want.

	@class RoFraps
]=]
local RoFraps = {}
RoFraps.ClassName = "RoFraps"
RoFraps.__index = RoFraps

--[=[
	What function is used for timing. Defaults to `os.clock`.
	@prop TimeFunction () -> number
	@within RoFraps
]=]

--[=[
	How often the statistics are updated.
	@prop UpdateRate number
	@within RoFraps
]=]

--[=[
	The current framerate. This is updated every frame.
	@prop Framerate number
	@readonly
	@tag Data
	@within RoFraps
]=]

--[=[
	The average framerate.
	@prop FramerateAverage number
	@readonly
	@tag Data
	@within RoFraps
]=]

--[=[
	The max framerate. This is updated every frame.

	:::info
	You should probably be using the 1% and 0.1% lows instead of this.
	:::

	@prop Max number
	@readonly
	@tag Data
	@within RoFraps
]=]

--[=[
	The min framerate. This is updated every frame.

	:::info
	You should probably be using the 1% and 0.1% lows instead of this.
	:::

	@prop Min number
	@readonly
	@tag Data
	@within RoFraps
]=]

--[=[
	The 1% low.
	@prop OnePercentLow number
	@readonly
	@tag Data
	@within RoFraps
]=]

--[=[
	The 1% low calculated from the average framerate.
	@prop OnePercentLowAverage number
	@readonly
	@tag Data
	@within RoFraps
]=]

--[=[
	The 0.1% low.
	@prop PointOnePercentLow number
	@readonly
	@tag Data
	@within RoFraps
]=]

--[=[
	The 0.1% low calculated from the average framerate.
	@prop PointOnePercentLowAverage number
	@readonly
	@tag Data
	@within RoFraps
]=]

--[=[
	A signal that is fired when RoFraps is updated.
	@prop DataUpdated Signal<>
	@readonly
	@within RoFraps
]=]

--[=[
	Creates a new RoFraps Instance.
	@param UpdateRate number? -- How often the statistics are updated. Defaults to `0.5`.
	@return RoFraps
]=]
function RoFraps.new(UpdateRate: number?)
	return setmetatable({
		DataUpdated = Signal.new() :: Signal.Signal<nil>;
		TimeFunction = os.clock;
		UpdateRate = if UpdateRate then UpdateRate else 0.5;

		Framerate = 0;
		FramerateAverage = 0;

		Max = -1;
		Min = math.huge;

		OnePercentLow = 0;
		OnePercentLowAverage = 0;

		PointOnePercentLow = 0;
		PointOnePercentLowAverage = 0;

		Connection = nil :: RBXScriptConnection?;
		AverageBuffer = CircularBuffer.FromPreallocation(1000, 0);
		FramerateBuffer = CircularBuffer.FromPreallocation(1000, 0);
		FrameUpdateArray = table.create(100) :: {number};
		TotalTime = 0;
	}, RoFraps)
end

--[=[
	Returns whether not the RoFraps instance is running.
	@return boolean -- True if the connection exists and is connected.
]=]
function RoFraps:IsRunning()
	local Connection = self.Connection
	return if Connection then Connection.Connected else false
end

--[=[
	Starts the connection that updates RoFraps.
	@return RoFraps -- Returns self.
]=]
function RoFraps:Start()
	self:Stop()

	local AverageBuffer = self.AverageBuffer
	local FramerateBuffer = self.FramerateBuffer
	local FrameUpdateArray = self.FrameUpdateArray

	local TimeFunction = self.TimeFunction

	local StartTime = TimeFunction()
	self.Connection = RunService.Heartbeat:Connect(function(DeltaTime)
		local TotalTime = self.TotalTime + DeltaTime
		self.TotalTime = TotalTime

		local LastIteration = TimeFunction()
		for Index = #FrameUpdateArray, 1, -1 do
			local Value = FrameUpdateArray[Index]
			FrameUpdateArray[Index + 1] = if Value >= LastIteration - 1 then Value else nil :: any
		end

		FrameUpdateArray[1] = LastIteration

		local CurrentTime = TimeFunction() - StartTime
		local Framerate = if CurrentTime >= 1 then #FrameUpdateArray else #FrameUpdateArray / CurrentTime
		FramerateBuffer:Push(Framerate)

		self.Framerate = Framerate
		self.Max = math.max(self.Max, Framerate)
		self.Min = math.min(self.Min, Framerate)

		if TotalTime >= self.UpdateRate then
			local SortedFramerates = table.clone(FramerateBuffer.Data)
			local FramerateLength = #SortedFramerates
			table.sort(SortedFramerates)

			local FramerateSum = 0
			for _, Value in SortedFramerates do
				FramerateSum += Value
			end

			local FramerateAverage = FramerateSum / FramerateLength
			AverageBuffer:Push(FramerateAverage)

			self.FramerateAverage = FramerateAverage

			local SortedAverages = table.clone(AverageBuffer.Data)
			local AverageLength = #SortedAverages
			table.sort(SortedAverages)

			self.OnePercentLow = math.round(SortedFramerates[math.ceil(FramerateLength / 100)] or 0)
			self.OnePercentLowAverage = math.round(SortedAverages[math.ceil(AverageLength / 100)] or 0)

			self.PointOnePercentLow = math.round(SortedFramerates[math.floor(FramerateLength / 1000)] or 0)
			self.PointOnePercentLowAverage = math.round(SortedAverages[math.floor(AverageLength / 1000)] or 0)

			self.DataUpdated:Fire()
		end
	end)

	return self
end

--[=[
	Stops the updating connection and clears the data.
	@return RoFraps -- Returns self.
]=]
function RoFraps:Stop()
	local Connection = self.Connection
	if Connection then
		Connection:Disconnect()
		self.Connection = nil
	end

	self.FramerateBuffer:Clear()
	table.clear(self.FrameUpdateArray)

	self.Framerate = 0
	self.FramerateAverage = 0

	self.Max = -1
	self.Min = math.huge

	self.OnePercentLow = 0
	self.OnePercentLowAverage = 0

	self.PointOnePercentLow = 0
	self.PointOnePercentLowAverage = 0

	self.TotalTime = 0

	return self
end

--[=[
	Completely destroys RoFraps. Makes the class unusable.
]=]
function RoFraps:Destroy()
	self:Stop()
	self.DataUpdated:Destroy()
	table.clear(self :: any)
	setmetatable(self :: any, nil)
end

function RoFraps:__tostring()
	return "RoFraps"
end

export type RoFraps = {
	ClassName: "RoFraps",

	DataUpdated: Signal.Signal<nil>,
	TimeFunction: () -> number,
	UpdateRate: number,

	Framerate: number,
	FramerateAverage: number,

	Max: number,
	Min: number,

	OnePercentLow: number,
	OnePercentLowAverage: number,

	PointOnePercentLow: number,
	PointOnePercentLowAverage: number,

	IsRunning: (self: RoFraps) -> boolean,
	Start: (self: RoFraps) -> RoFraps,
	Stop: (self: RoFraps) -> RoFraps,
	Destroy: (self: RoFraps) -> (),
}

table.freeze(RoFraps)
return RoFraps
