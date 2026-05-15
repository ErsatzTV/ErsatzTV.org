---
uid: search-sample
title: Sample Searches
sidebar_position: 1
---

### Christmas

```
plot:christmas
```

### Christmas without Horror

```
plot:christmas NOT genre:horror
```

### 1970's Movies

```
type:movie AND release_date:197*
```

### 1970's-1980's Comedies

```
genre:comedy AND (release_date:197* OR release_date:198*)
```

### Lush Music (Artists)

```
mood:lush
```

### Episodes from the past week

```
type:episode AND released_inthelast:"1 week"
```

### Episodes older than the past week

```
type:episode AND released_notinthelast:"1 week"
```

### Episodes released on this day

```
type:episode AND released_onthisday:1
```
