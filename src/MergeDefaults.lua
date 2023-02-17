--!optimize 2
export type IRenderProps = {
	ShowFramerate: boolean?,

	ShowMax: boolean?,
	ShowMin: boolean?,

	ShowOnePercentLow: boolean?,
	ShowPointOnePercentLow: boolean?,

	FontFace: Font?,
	TextSize: number?,
}

type IMergeRenderProps = {
	ShowFramerate: boolean,

	ShowMax: boolean,
	ShowMin: boolean,

	ShowOnePercentLow: boolean,
	ShowPointOnePercentLow: boolean,

	FontFace: Font,
	TextSize: number,
}

local DEFAULT_PROPS: IMergeRenderProps = {
	ShowFramerate = true;

	ShowMax = true;
	ShowMin = true;

	ShowOnePercentLow = true;
	ShowPointOnePercentLow = true;

	FontFace = Font.new("rbxasset://fonts/families/RobotoMono.json");
	TextSize = 20;
}

local function MergeDefaults(Properties: IRenderProps?): IMergeRenderProps
	local New = table.clone(DEFAULT_PROPS)
	if Properties then
		for Key, Value in Properties do
			New[Key] = Value
		end
	end

	return New
end

return MergeDefaults
