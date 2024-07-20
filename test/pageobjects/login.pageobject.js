
import { $ } from "@wdio/globals"
import BasePage from "../base/base.page"

export default class LoginPageObjects extends BasePage {
  
    inputUsername()         {   return $("//input[@placeholder='Enter Email Address']")   }
    inputPassword()         {   return $("//input[@placeholder='Enter Password']")   }
    btnSignMeIn()           {   return $("//ion-button[text()]")   }
    txtInvalidCredentials() {   return $("//ion-text[text()='Invalid Credentials']")    }
    txtPlsCheckUrl()        {   return $("//ion-text[contains(text(), 'Please check your URL.')]")    }
    txtSubDomainRequired()  {   return $("//ion-text/span[contains(text(), 'Subdomain is required.')]")    }

    imgLinkLive()           {   return $("(//ion-label /img[@alt='LinkLive'])[1]")   }


}
