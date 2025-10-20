---
uid: advanced-graphics-engine-sample
title: Sample Graphics
sidebar_position: 1
---

## Text Elements

### Music Video Artist and Title

This text element displays the music video artist and music video title for 15 seconds at the beginning of each item.

It uses the **OPTIKabel-Heavy** font.

```yaml
opacity_expression: "LinearFadePoints(content_seconds, 0, 1, 16, 17)"

location: "BottomLeft"
horizontal_margin_percent: 15
vertical_margin_percent: 10

z_index: 1

styles:
  - name: "base"
    font_family: "OPTIKabel-Heavy"
    font_size: 32
    text_color: "#FFFFFF"
    font_italic: false    
    font_weight: 700
    
base_style: "base"

epg_entries: 0

width_percent: 80
text_fit: scale

text: |
  {{ MediaItem_Artist }}
  "{{ MediaItem_Title }}"
```

## Image Elements

### Music Video Artist Image

This image element displays the `artist.png` file (if present) in the same folder as the current music video, for 15 seconds at the beginning of each item.

```yaml
opacity_expression: "LinearFadePoints(content_seconds, 0, 1, 16, 17)"

location: "BottomLeft"
horizontal_margin_percent: 5
vertical_margin_percent: 10

z_index: 1

scale: true
scale_width_percent: 8

image: {{ MediaItem_Path | get_directory_name }}/artist.png
```
