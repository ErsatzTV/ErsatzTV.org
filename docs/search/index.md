---
uid: search-index
title: Search
---

## Search Box

Movies, Shows, Episodes, Artists and Music Videos can be searched using the search box next to the ErsatzTV logo.

![Search Box](/images/docs/search-box.png)

## Search Fields

The `title` field of all media types is searched by default if no other field is specified.

### Movies

The following fields are available for searching movies:

- `title`: The movie title
- `genre`: The movie genre
- `tag`: The movie tag (not available with Plex metadata)
- `tag_full`: same as `tag`, but not tokenized or analyzed
- `collection`: The name of the collection that contains the movie
- `plot`: The movie plot
- `studio`: The movie studio
- `actor`: An actor from the movie
- `director`: A director from the movie
- `writer`: A writer from the movie
- `library_name`: The name of the library that contains the movie
- `content_rating`: The movie content rating (case-sensitive) 
- `language`: The movie audio stream language
- `language_tag`: The movie audio stream language tag
- `sub_language`: The movie subtitle stream language
- `sub_language_tag`: The movie subtitle stream language tag
- `release_date`: The movie release date (YYYYMMDD)
- `added_date`: The date the movie was added to ErsatzTV (YYYYMMDD)
- `chapters`: The number of chapters in the movie
- `minutes`: The rounded-up whole number duration of the movie in minutes
- `seconds`: The rounded-up whole number duration of the movie in seconds
- `height`: The movie height
- `width`: The movie width
- `video_codec`: The video codec
- `video_bit_depth`: The number of bits in the movie's pixel format
- `video_dynamic_range`: The movie's dynamic range (`sdr` or `hdr`)
- `type`: Always `movie`

### Shows

The following fields are available for searching shows:

- `title`: The show title
- `genre`: The show genre
- `tag`: The show tag (not available with Plex metadata)
- `tag_full`: same as `tag`, but not tokenized or analyzed
- `collection`: The name of the collection that contains the show
- `plot`: The show plot
- `studio`: The show studio
- `network`: Plex's "network" metadata for the show
- `actor`: An actor from the show
- `library_name`: The name of the library that contains the show
- `content_rating`: The show content rating (case-sensitive)
- `language`: The show audio stream language
- `language_tag`: The show audio stream language tag
- `sub_language`: The show subtitle stream language
- `sub_language_tag`: The show subtitle stream language tag
- `release_date`: The show release date (YYYYMMDD)
- `added_date`: The date the show was added to ErsatzTV (YYYYMMDD)
- `type`: Always `show`

### Seasons

The following fields are available for searching seasons:

- `title`: The season title
- `tag`: The season tag (not available with Plex metadata)
- `tag_full`: same as `tag`, but not tokenized or analyzed
- `collection`: The name of the collection that contains the season
- `library_name`: The name of the library that contains the season
- `season_number`: The season number
- `language`: The season audio stream language
- `language_tag`: The season audio stream language tag
- `sub_language`: The season subtitle stream language
- `sub_language_tag`: The season subtitle stream language tag
- `show_title`: The title of the show that contains the season
- `show_genre`: The genre of the show that contains the season
- `show_studio`: The studio of the show that contains the season
- `show_content_rating`: The content rating of the show that contains the season
- `show_tag`: The tag of the show that contains the season
- `type`: Always `season`

### Episodes

The following fields are available for searching episodes:

- `title`: The episode title
- `plot`: The episode plot
- `director`: A director from the episode
- `writer`: A writer from the episode
- `tag`: The episode tag (not available with Plex metadata)
- `tag_full`: same as `tag`, but not tokenized or analyzed
- `collection`: The name of the collection that contains the episode
- `library_name`: The name of the library that contains the episode
- `language`: The episode audio stream language
- `language_tag`: The episode audio stream language tag
- `sub_language`: The episode subtitle stream language
- `sub_language_tag`: The episode subtitle stream language tag
- `release_date`: The episode release date (YYYYMMDD)
- `added_date`: The date the episode was added to ErsatzTV (YYYYMMDD)
- `chapters`: The number of chapters in the episode
- `minutes`: The rounded-up whole number duration of the episode in minutes
- `seconds`: The rounded-up whole number duration of the episode in seconds
- `height`: The episode height
- `width`: The episode width
- `season_number`: The episode season number
- `episode_number`: The episode number
- `show_title`: The title of the show that contains the episode
- `show_genre`: The genre of the show that contains the episode
- `show_studio`: The studio of the show that contains the episode
- `show_network`: Plex's "network" metadata for the show that contains the episode
- `show_content_rating`: The content rating of the show that contains the episode
- `show_tag`: The tag of the show that contains the episode
- `video_codec`: The video codec
- `video_bit_depth`: The number of bits in the episode's pixel format
- `video_dynamic_range`: The episode's dynamic range (`sdr` or `hdr`)
- `type`: Always `episode`

### Artists

The following fields are available for searching artists:

- `title`: The artist name
- `genre`: The artist genre
- `style`: The artist style
- `mood`: The artist mood
- `language`: The artist audio stream language
- `language_tag`: The artist audio stream language tag
- `sub_language`: The artist subtitle stream language
- `sub_language_tag`: The artist subtitle stream language tag
- `collection`: The name of the collection that contains the artist
- `added_date`: The date the artist was added to ErsatzTV (YYYYMMDD)
- `library_name`: The name of the library that contains the artist
- `type`: Always `artist`

### Music Videos

The following fields are available for searching music videos:

- `title`: The music video title
- `artist`: The music video artist
- `album`: The music video album
- `genre`: The music video genre
- `tag`: The music video tag
- `tag_full`: same as `tag`, but not tokenized or analyzed
- `collection`: The name of the collection that contains the music video
- `library_name`: The name of the library that contains the music video
- `language`: The music video audio stream language
- `language_tag`: The music video audio stream language tag
- `sub_language`: The music video subtitle stream language
- `sub_language_tag`: The music video subtitle stream language tag
- `release_date`: The music video release date (YYYYMMDD)
- `added_date`: The date the music video was added to ErsatzTV (YYYYMMDD)
- `chapters`: The number of chapters in the music video
- `minutes`: The rounded-up whole number duration of the music video in minutes
- `seconds`: The rounded-up whole number duration of the music video in seconds
- `height`: The music video height
- `width`: The music video width
- `video_codec`: The video codec
- `video_bit_depth`: The number of bits in the music video's pixel format
- `video_dynamic_range`: The music video's dynamic range (`sdr` or `hdr`)
- `type`: Always `music_video`

### Other Videos

The following fields are available for searching other videos:

- `title`: The NFO title or the filename of the video (without extension)
- `genre`: The video genre
- `tag`: The video tag
- `tag_full`: same as `tag`, but not tokenized or analyzed
- `collection`: The name of the collection that contains the video
- `plot`: The video plot
- `studio`: The video studio
- `actor`: An actor from the video
- `director`: A director from the video
- `writer`: A writer from the video
- `library_name`: The name of the library that contains the video
- `content_rating`: The video content rating (case-sensitive)
- `language`: The video audio stream language
- `language_tag`: The video audio stream language tag
- `sub_language`: The video subtitle stream language
- `sub_language_tag`: The video subtitle stream language tag
- `release_date`: The video release date (YYYYMMDD)
- `added_date`: The date the video was added to ErsatzTV (YYYYMMDD)
- `chapters`: The number of chapters in the video
- `minutes`: The rounded-up whole number duration of the video in minutes
- `seconds`: The rounded-up whole number duration of the video in seconds
- `height`: The video height
- `width`: The video width
- `video_codec`: The video codec
- `video_bit_depth`: The number of bits in the other video's pixel format
- `video_dynamic_range`: The other video's dynamic range (`sdr` or `hdr`)
- `type`: Always `other_video`

### Songs

The following fields are available for searching songs:

- `title`: The song title, or the filename of the song (without extension)
- `album`: The song album
- `artist`: The song/track artist
- `album_artist`: The album artist
- `genre`: The song genre
- `tag`: All of the song's parent folders
- `tag_full`: same as `tag`, but not tokenized or analyzed
- `collection`: The name of the collection that contains the song
- `library_name`: The name of the library that contains the song
- `minutes`: the rounded-up whole number duration of the song in minutes
- `seconds`: the rounded-up whole number duration of the song in seconds
- `added_date`: The date the song was added to ErsatzTV (YYYYMMDD)
- `type`: Always `song`

### Images

The following fields are available for searching images:

- `title`: The image title, or the filename of the image (without extension)
- `genre`: The image genre
- `tag`: All of the image's parent folders
- `tag_full`: same as `tag`, but not tokenized or analyzed
- `collection`: The name of the collection that contains the image
- `library_name`: The name of the library that contains the image
- `added_date`: The date the image was added to ErsatzTV (YYYYMMDD)
- `type`: Always `image`

## Special Search Fields

- `released_inthelast`: For any media type that supports `release_date`, `released_inthelast` takes a number and a unit (days, weeks, months, years) and returns items released between the specified time ago and now
- `released_notinthelast`: For any media type that supports `release_date`, `released_notinthelast` takes a number and a unit (days, weeks, months, years) and returns items released before the specified time ago
- `released_onthisday`: For any media type that supports `release_date`, `released_onthisday` takes any value (ignored) and will return items released on this month number and day number in previous years
- `added_inthelast`: For any media type that supports `added_date`, `added_inthelast` takes a number and a unit (days, weeks, months, years) and returns items added to ErsatzTV between the specified time ago and now
- `added_notinthelast`: For any media type that supports `added_date`, `added_notinthelast` takes a number and a unit (days, weeks, months, years) and returns items added to ErsatzTV before the specified time ago
