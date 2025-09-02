---
uid: scheduling-scripted-index
title: Scripted Schedules
---

Scripted schedules allow users to create extremely customized channel programming using python scripts.

Scripted schedules contain three methods:

1. [define_content](/docs/scheduling/scripted/define_content) defines the content (media items), and is called before the playout is reset or built.
2. [reset_playout](/docs/scheduling/scripted/reset_playout) is called when the playout is reset, and before the playout is built.
3. [build_playout](/docs/scheduling/scripted/build_playout) is called when the playout is built.
