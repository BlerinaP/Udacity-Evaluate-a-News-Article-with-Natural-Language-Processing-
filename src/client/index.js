/**
 * Importing important js files and css files that we need to bundle from webpack
 */


import {hashtagSubmit} from "./js/hashtag";
import { handleSubmit } from "./js/formHandler";
import { handleSubmitArticle} from "./js/submitURL";

import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

export {
    handleSubmit,
    handleSubmitArticle,
    hashtagSubmit
}