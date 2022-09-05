import mixpanel from 'mixpanel-browser';

const TOKEN = '460b36c40f3f1969fc0314d3b1c72315';
mixpanel.init(TOKEN, { debug: true, ignore_dnt: true });
const eventTracker = (event, props) => {
  const mixPanelTrack = (trackName, options) => {
    mixpanel.track(trackName, options);
  };
  mixPanelTrack(event, {
    'Track Source': 'WordPress DP',
    ...props,
  });
};

export { eventTracker };
