"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},l="Installation",i={unversionedId:"installation",id:"installation",title:"Installation",description:"Method 1 - RepoToRoblox",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/RoFraps/docs/installation",draft:!1,editUrl:"https://github.com/howmanysmall/RoFraps/edit/main/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Getting Started with RoFraps",permalink:"/RoFraps/docs/intro"},next:{title:"Why use RoFraps?",permalink:"/RoFraps/docs/why-use"}},s={},c=[{value:"Method #1 - RepoToRoblox",id:"method-1---repotoroblox",level:3},{value:"Method #2 - HttpService",id:"method-2---httpservice",level:3},{value:"Method 3 - Manual",id:"method-3---manual",level:3},{value:"Method 4 - Wally",id:"method-4---wally",level:3},{value:"Next",id:"next",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"method-1---repotoroblox"},"Method #1 - RepoToRoblox"),(0,r.kt)("p",null,"Using Boatbomber's ",(0,r.kt)("a",{parentName:"p",href:"https://devforum.roblox.com/t/repotoroblox-simple-and-quick-github-cloning-into-your-explorer/1000272"},"RepoToRoblox")," plugin is the easiest way to install in Studio."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the RepoToRoblox widget, enter ",(0,r.kt)("inlineCode",{parentName:"li"},"howmanysmall")," as the Owner and ",(0,r.kt)("inlineCode",{parentName:"li"},"RoFraps")," as the Repo."),(0,r.kt)("li",{parentName:"ol"},"Click the Clone Repo button.")),(0,r.kt)("h3",{id:"method-2---httpservice"},"Method #2 - HttpService"),(0,r.kt)("p",null,"This method uses ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpService")," to install RoFraps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Roblox Studio, paste the following command into your command bar."),(0,r.kt)("li",{parentName:"ol"},"Run the following command:")),(0,r.kt)("textarea",{readonly:!0,rows:"5",onClick:e=>e.target.select(),style:{width:"100%"}},'local ReplicatedStorage = game:GetService("ReplicatedStorage")\nlocal HttpService = game:GetService("HttpService")\nlocal HttpEnabled = HttpService.HttpEnabled\nHttpService.HttpEnabled = true\nlocal function RequestAsync(RequestDictionary)\n\treturn HttpService:RequestAsync(RequestDictionary)\nend\nlocal function GetAsync(Url, Headers)\n\tHeaders["cache-control"] = "no-cache"\n\tlocal Success, ResponseDictionary = pcall(RequestAsync, {\n\t\tHeaders = Headers;\n\t\tMethod = "GET";\n\t\tUrl = Url;\n\t})\n\tif Success then\n\t\tif ResponseDictionary.Success then\n\t\t\treturn ResponseDictionary.Body\n\t\telse\n\t\t\treturn false, string.format("HTTP %d: %s", ResponseDictionary.StatusCode, ResponseDictionary.StatusMessage)\n\t\tend\n\telse\n\t\treturn false, ResponseDictionary\n\tend\nend\nlocal function Initify(Root)\n\tlocal InitFile = Root:FindFirstChild("init") or Root:FindFirstChild("init.lua") or Root:FindFirstChild("init.client.lua") or Root:FindFirstChild("init.server.lua")\n\tif InitFile then\n\t\tInitFile.Name = Root.Name\n\t\tInitFile.Parent = Root.Parent\n\t\tfor _, Child in Root:GetChildren() do\n\t\t\tChild.Parent = InitFile\n\t\tend\n\t\tRoot:Destroy()\n\t\tRoot = InitFile\n\tend\n\tfor _, Child in Root:GetChildren() do\n\t\tInitify(Child)\n\tend\n\treturn Root\nend\nlocal FilesList = HttpService:JSONDecode(assert(GetAsync(\n\t"https://api.github.com/repos/howmanysmall/RoFraps/contents/src",\n\t{accept = "application/vnd.github.v3+json"}\n)))\nlocal RoFraps = Instance.new("Folder")\nRoFraps.Name = "RoFraps"\nfor _, FileData in FilesList do\n\tlocal ModuleScript = Instance.new("ModuleScript")\n\tModuleScript.Name = tostring(string.match(FileData.name, "(%w+)%.lua"))\n\tlocal Success, Source = GetAsync(FileData.download_url, {})\n\tif not Success then\n\t\tModuleScript.Source = string.format("--[[\n%*\n]]\nreturn false\n", tostring(Source))\n\telse\n\t\tModuleScript.Source = tostring(Success)\n\tend\n\tModuleScript.Parent = RoFraps\nend\nRoFraps.Parent = ReplicatedStorage\nInitify(RoFraps)\nHttpService.HttpEnabled = HttpEnabled'),(0,r.kt)("h3",{id:"method-3---manual"},"Method 3 - Manual"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/howmanysmall/RoFraps/releases"},"latest release")),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("em",{parentName:"li"},"Assets"),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"RoFraps.rbxm")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("a",{parentName:"li",href:"https://rojo.space/"},"Rojo"),"? Put the file into your game directly."),(0,r.kt)("li",{parentName:"ul"},"Using Roblox Studio? Drag the file onto the viewport. It should insert under Workspace.")))),(0,r.kt)("h3",{id:"method-4---wally"},"Method 4 - Wally"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setup ",(0,r.kt)("a",{parentName:"li",href:"https://wally.run/"},"Wally")," by using ",(0,r.kt)("inlineCode",{parentName:"li"},"wally init"),"."),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"howmanysmall/rofraps")," as a dependency.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nRoFraps = "howmanysmall/rofraps@^1.1.0"\n')),(0,r.kt)("h2",{id:"next"},"Next"),(0,r.kt)("p",null,"Now, check out the ",(0,r.kt)("a",{parentName:"p",href:"/api/RoFraps"},"API reference"),"!"))}d.isMDXComponent=!0}}]);