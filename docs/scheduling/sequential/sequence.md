---
uid: scheduling-sequential-sequence
title: Sequences
sidebar_position: 2
---

Sequences define reusable blocks of instructions that can be executed multiple times throughout the sequential schedule.

```yaml
sequence:
  - key: "SHOW_WITH_BUMPERS"
    items:
      - count: 1
        content: "BUMPERS"
        filler_kind: "preroll"
      - count: 1
        content: "MAIN_SHOW"
      - count: 1
        content: "BUMPERS"
        filler_kind: "postroll"
```

### Sequence parameters

- **key** (required) - Unique name that can be used to reference this sequence throughout the sequential schedule definition.
- **items** (required) - List of [Playout Instructions](/docs/scheduling/sequential/playout) to execute every time the sequence is referenced.

### Benefits of sequences

- **Consistency** - Ensure the same pattern is used everywhere
- **Maintainability** - Change the pattern in one place
- **Readability** - Give complex patterns meaningful names

### Common sequence patterns

```yaml
sequence:
  # Commercial break pattern
  - key: "COMMERCIAL_BREAK"
    items:
      - duration: "2 minutes"
        content: "COMMERCIALS"
        trim: true
  
  # Show block with intro/outro
  - key: "MORNING_SHOW_BLOCK"
    items:
      - count: 1
        content: "SHOW_INTROS"
      - count: 3
        content: "MORNING_SHOWS"  
      - count: 1
        content: "SHOW_OUTROS"
```
