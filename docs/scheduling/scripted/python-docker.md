---
uid: scheduling-scripted-python-docker
title: Python in Docker
---

### Entrypoint

All docker images contain a pre-generated OpenAPI Python client and an [entrypoint script](https://github.com/ErsatzTV/ErsatzTV/blob/main/scripts/scripted-schedules/entrypoint.py).

This entrypoint script loads the client module, the referenced scripted schedule (see [Configuring Playout](#configuring-playout)), and calls some well-known methods in the scripted schedule.

### Scripted Schedule

The referenced scripted schedules can be named anything, but must be mounted in the container under `/app/scripted-schedules/scripts`. These scripts must contain three methods, which will be called by the provided entrypoint:

```python
from datetime import datetime, timedelta
from uuid import UUID

from etv_client import ScriptedScheduleApi
from etv_client.models import *


def define_content(api_instance: ScriptedScheduleApi, context: PlayoutContext, build_id: UUID) -> None:
    pass


def reset_playout(api_instance: ScriptedScheduleApi, context: PlayoutContext, build_id: UUID) -> PlayoutContext:
    return context


def build_playout(api_instance: ScriptedScheduleApi, context: PlayoutContext, build_id: UUID) -> None:
    while not context.is_done:
        # TODO: make api calls here to build the playout
        pass
```

### Configuring the Playout

The scripted schedule playout must be created using the following format:

```sh
/app/scripted-schedules/entrypoint.py [script name]
```

Where script name is the name of the script under `/app/scripted-schedules/scripts` **without** the `.py` extension. For example:

```sh
/app/scripted-schedules/entrypoint.py one
```

will execute the script at `/app/scripted-schedules/scripts/one.py`.
