import { configure } from '@kadira/storybook';
import 'uikit/dist/css/uikit.min.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
