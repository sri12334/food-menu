import data from '../data.js';
import dom from '../dom.js';
// import filterHandler from './filterHandler.js';
import createButton from '../components/createButton.js';
import createItem from '../components/createItem.js';

const loadHandler = () => {
    data.buttons.forEach((btn) => {
        dom.btnContainer.append(createButton(btn));
    });

    data.menu.forEach((item) => {
        dom.sectionContainer.append(createItem(item));
    });
};

export default loadHandler;
