import {VideoPlayer as vP} from "../library/VideoPlayer.js";

export const m_VideoPlayer = ({_me, args: {autoplay = false, loop = false, desktop_src = null, mobile_src = null, tracker_prefix = false}, first, lookUp}) => {
	const _container = lookUp('video-player-container') ?? _me
	const _video = _container.querySelector('video')
	const track_config = {}
	if ( tracker_prefix ?? false ) {
		track_config.prefix = tracker_prefix
	}
	vP.create({
		_player: _me,
		_video,
		_source: _video.querySelector('source'),
		_play_button: first('play'),
		_container,
		_reset_button: _container.querySelector('[data-reset]'),
		autoplay: !!autoplay,
		loop: !!loop,
		desktop_src,
		mobile_src
	}).track(track_config)
}
