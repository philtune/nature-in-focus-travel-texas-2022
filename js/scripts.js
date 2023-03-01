import {_$} from "./library/myWrapper.js";
import {Peek} from "./modules/Peek.js";
import {m_VideoPlayer} from "./modules/m_VideoPlayer.js";
import {track} from "./functions/track.js";
import {Tracker} from "./library/Tracker.js";

Tracker.set({oid: 41521, cid: 1028})
track('https://ruv80zbas1.execute-api.us-east-1.amazonaws.com/prod/view?creative_id=1028&operative_id=41521&tag_name=blackbird-overall&ord=%%CACHEBUSTER%%')

Object.entries({
	'video-player': m_VideoPlayer,
	'peek': Peek
}).forEach(([key, cb]) => _$(key).each(cb))
