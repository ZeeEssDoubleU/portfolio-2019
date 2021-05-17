// constants
export const app_dark_hsl = "0, 0%, 0%"
export const app_green_hsl = "167, 73%, 60%"
export const app_blue_hsl = "231, 95%, 62%"
export const font_white_hsl = "0, 0%, 100%"
export const font_blue_hsl = "231, 95%, 75%"

// declare theme
export const theme = {
	color: {
		app_dark: "black",
		app_dark_hsl: app_dark_hsl,
		app_dark_gradient: "linear-gradient(153deg, #323232 0%, black 100vh)",
		app_light: "white",
		app_green: `hsla(${app_green_hsl}, 1.0)`,
		app_green_hsl: app_green_hsl,
		app_blue: `hsla(${app_blue_hsl}, 1.0)`,
		app_blue_hsl: app_blue_hsl,
		app_greenBlue_gradient: `linear-gradient(to right, hsl(${app_green_hsl}) 0%, hsl(${app_blue_hsl}) 100%)`,
		app_blueGreen_gradient: `linear-gradient(to right, hsl(${app_blue_hsl}) 0%, hsl(${app_green_hsl}) 100%)`,
		font_white_light: `hsla(${font_white_hsl}, 1.0)`,
		font_white_med: `hsla(${font_white_hsl}, .65)`,
		font_white_dark: `hsla(${font_white_hsl}, .38)`,
		font_blue: `hsla(${font_blue_hsl}, 1.0)`,
		shadow_white: "hsla(0, 0%, 100%, .1)",
	},
	duration: {},
	element: {},
	font: {},
	media: {
		mobile: 320,
		tablet: 768,
		desktop: 1025,
		widescreen: 1216,
		fullhd: 1408,
	},
	spacing: {
		inset_width: "1200px",
	},
}

// *** Spacing and sizing guide
// 4px		0.25rem
// 8px		0.5rem
// 12px		0.75rem
// 16px		1rem
// 24px		1.5rem
// 32px		2rem
// 48px		3rem
// 64px		4rem
// 96px		6rem
// 128px		8rem
// 160px		10rem
// 192px		12rem
// 256px		16rem
// 384px		24rem
// 512px		32rem
// 640px		40rem
// 768px		48rem

// *** Font sizing scale
// 12px		0.75rem
// 14px
// 16px		1rem
// 18px
// 20px		1.25rem
// 24px		1.5rem
// 30px
// 36px		2.25rem
// 48px		3rem
// 64px		4rem
// 96px		6rem

// *** Font spacing scale
// 1em

// *** Paragraph widths
// 20 - 35em

// *** Depth Guides
// Raised effect
// inset 0 1px 0 hsl( choose color by hand ),
// 0 1px 3px hsl(0, 0%, 0%, 0.2);

// Inset effect
// inset 0 1px 3px hsl(0, 0%, 0%, 0.2),
// 0 -1px 0 hsl( choose color by hand );

// *** Shadows
// 0 1px 2px hsla(0, 0%, 0%, .24),
// 0 1px 3px hsla(0, 0%, 0%, .12);

// 0 1px 2px hsla(0, 0%, 0%, .24),
// 0 1px 3px hsla(0, 0%, 0%, .12);

// 0 2px 4px hsla(0, 0%, 0%, .12),
// 0 3px 6px hsla(0, 0%, 0%, .15);

// 0 5px 10px hsla(0, 0%, 0%, .5),
// 0 15px 25px hsla(0, 0%, 0%, .15);

// 0 20px 40px hsla(0, 0%, 0%, .2);
