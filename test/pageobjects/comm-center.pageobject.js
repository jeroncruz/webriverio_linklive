
import { $ } from "@wdio/globals"
import BasePage from "../base/base.page"

export default class CommCenterPageObjects extends BasePage {
    
    btnDismiss()                       {   return $(`//ion-button[contains(text(),'Dismiss')]`)   }
    toastMsg()                         {   return $(`//ion-toast`)   }
    txtLoading()                       {   return $(`//ion-card-title[text()="Loading"]`)   }
    spanRevContactName(username)       {   return $(`//span[@class='rev-contact-name' and contains(text(), '${username}')]`)   }

    txtContactName(username)           {   return $(`(//ion-label[contains(text(),'${username}')])[1]`)   }    
    divTimer()                         {   return $(`//span[contains(text(),'Timer:')]/parent::div`)   }    
    txtInternal()                      {   return $(`//ion-label/div/div[contains(text(),'Internal')]`)   }    

}
