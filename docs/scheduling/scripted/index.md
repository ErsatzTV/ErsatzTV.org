---
uid: scheduling-scripted-index
title: Scripted Schedules
---

Scripted schedules allow users to create extremely customized channel programming using ErsatzTV's [OpenAPI description](https://github.com/ErsatzTV/ErsatzTV/blob/main/ErsatzTV/wwwroot/openapi/scripted-schedule.json).

Scripted schedules are executed by ErsatzTV and are passed the following arguments (in order):

1. The API host (e.g. `http://localhost:8409`)
2. The build id (a UUID string that is required on all API calls)
3. The playout build mode (e.g. `reset` or `continue`)
4. Any custom arguments set in the **Scripted Schedule** field in the playout editor

Scripted schedules must be directly executable. If they are not, a wrapper script can be used.

An example implementation using Python is available in all docker images. See [Python in Docker](/docs/scheduling/scripted/python-docker).
