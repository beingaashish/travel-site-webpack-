import { extend } from 'lodash';
import '../styles/styles.css'

if(module.hot){
    module.hot.accept()
}

import MobileMenu from './modules/MobileMenu';

let mobileMenu = new MobileMenu();