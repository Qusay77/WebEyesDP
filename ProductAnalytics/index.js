import mixpanel from 'mixpanel-browser';

const TOKEN = '460b36c40f3f1969fc0314d3b1c72315';
mixpanel.init(TOKEN, { debug: true, ignore_dnt: true });

const mixPanelTrack = (trackName, options) => {
  mixpanel.track(trackName, options);
};

const eventTracker = (event, props) => {
  mixPanelTrack(event, {
    'Track Source': 'WordPress DP',
    ...props,
  });
};

const userTacker = (email, fullName) => {
  mixpanel.identify(email);
  mixpanel.people.set({
    $name: fullName,
    $email: email,
  });
};

export { eventTracker, userTacker };
