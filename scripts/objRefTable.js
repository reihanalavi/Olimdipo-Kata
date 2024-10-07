const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Browser,
		C3.Plugins.Sprite,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.TiledBg.Acts.SetVisible,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Text.Cnds.CompareOpacity,
		C3.Plugins.System.Exps.left,
		C3.Plugins.System.Exps.len,
		C3.Plugins.Keyboard.Exps.StringFromKeyCode,
		C3.Plugins.Keyboard.Exps.LastKeyCode,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen
	];
};
self.C3_JsPropNameTable = [
	{aka: 0},
	{ao: 0},
	{state: 0},
	{white: 0},
	{Text: 0},
	{win: 0},
	{Touch: 0},
	{Keyboard: 0},
	{Browser: 0},
	{WhatsApp_Image_20241007_at_143643removebgpreview: 0},
	{aka_pick_score: 0},
	{ao_pick_score: 0},
	{aka_score: 0},
	{ao_score: 0},
	{state_string: 0}
];

self.InstanceType = {
	aka: class extends self.ITiledBackgroundInstance {},
	ao: class extends self.ITiledBackgroundInstance {},
	white: class extends self.ITiledBackgroundInstance {},
	Text: class extends self.ITextInstance {},
	win: class extends self.ITiledBackgroundInstance {},
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	WhatsApp_Image_20241007_at_143643removebgpreview: class extends self.ISpriteInstance {}
}