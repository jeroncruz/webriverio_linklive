
import { $ } from "@wdio/globals"
import BasePage from "../base/base.page"

export default class AccountPageObjects extends BasePage {
  
    navAccount()         {   return $("//ion-button[@id='revStatusTrigger']")   }
    iconSignOut()        {   return $("//ion-label[text()='Sign Out']")   }


}
