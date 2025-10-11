---
uid: advanced-graphics-engine
title: Graphics Engine
sidebar_position: 2
---

The ErsatzTV graphics engine is used to overlay custom graphics elements (images and text) on top of the primary content with a high degree of control and customization.

## Graphics Element Definitions

Graphics elements are defined in YAML files located in the ErsatzTV config folder / `templates` / `graphics-elements` subfolder. Each element type also has its own subfolder: Images in `image`, text in `text`, subtitles in `subtitle` and motion in `motion`. ErsatzTV will automatically create these (empty) folders on startup.

All element definitions are pre-processed using [Scriban](https://github.com/scriban/scriban) templates.

### Image Elements

Image elements are used to draw images, similar to watermarks but without the need to configure using the UI.

```yaml
opacity_percent: 100

location: "BottomLeft"
horizontal_margin_percent: 5
vertical_margin_percent: 5

z_index: 1

scale: true
scale_width_percent: 15

image: "/home/user/Pictures/watermark.gif"
```

### Text Elements

Text elements are used to draw text, and support dynamic text using [Scriban](https://github.com/scriban/scriban) templates and variables.

```yaml
opacity_percent: 100

location: "BottomLeft"
horizontal_margin_percent: 5
vertical_margin_percent: 5

z_index: 2

styles:
  - name: "style1"
    font_family: "OPTIKabel-Heavy"
    font_size: 48
    text_color: "#FFFFFF"
    #font_weight: 800
    #font_italic: true
    #letter_spacing: 20

base_style: "style1"

# optionally include fonts from a specific folder
include_fonts_from: "/home/user/fonts"

# optionally include data from epg entries for text replacement
epg_entries: 0

text: |
  One Line Of Text
  Two Lines Of Text
```

### Subtitle Elements

Subtitle elements are used to draw subtitles, and support dynamic subtitles using [Scriban](https://github.com/scriban/scriban) templates and variables.

```yaml
z_index: 3

# optionally include data from epg entries for text replacement
epg_entries: 0

template: "/home/user/subtitles.ass"
```

### Motion Elements

Motion elements are used to draw video (transparent or opaque).

```yaml
video_path: /home/user/Videos/motion1.webm

location: TopLeft
horizontal_margin_percent: 5
vertical_margin_percent: 5

scale: true
scale_width_percent: 25

start_seconds: {{ MediaItem_Duration.TotalSeconds - 5 }}

end_behavior: loop

z_index: 1
```

## Using Graphics Elements

### Classic Schedules

Graphics elements can be enabled on individual schedule items.

### Block Schedules

Graphics elements can be enabled on individual block items and on decos.

### Sequential Schedules

Graphics elements can be turned on and off using the [Sequential Playout Instructions](/docs/scheduling/sequential/playout) **Graphics On** and **Graphics Off**.

### Scripted Schedules

Graphics elements can be turned on and off using `graphics_on` and `graphics_off` API calls.

### Troubleshooting

Multiple graphics elements can be selected for immediate testing in the playback troubleshooting tool.
