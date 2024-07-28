
import { $ } from "@wdio/globals"
import BasePage from "../base/base.page"

export default class MsgCenterPageObjects extends BasePage {
  
    navMsgCenter()                      {   return $("//ion-item[@title='Message Center']")   }
    btnComposeNewMsg()                  {   return $("//ion-button[@qa-automation='email-main-menu-btn-compose-email']")   }
    txtFieldTo()                        {   return $("//ion-input[@id='to']/input")   }
    txtFieldSubject()                   {   return $("//ion-input[@id='subject']/input")   }
    iframeBody()                        {   return $("//iframe[@id='iframe']")   }
    txtAreaEmailBody()                  {   return $("//body")   }
    inputUploadFile()                   {   return $("input[name='filename']")   }
    btnSend()                           {   return $("//ion-button[@qa-automation='email-compose-btn-send']")   }

    navMailInbox()                      {   return $("//ion-label[@qa-automation='email-main-menu-label-title-mail-inbox']")   }
    txtEmailListFrom()                  {   return $$("//ion-label[@qa-automation='email-item-label-header']/h3")   }
    txtEmailContentSubject()            {   return $("//ion-label[@qa-automation='email-reader-item-label-text-subject']/h1")   }
    txtEmailContentFile()               {   return $("//div[@class='rev-file']/a")   }
    txtEmailContentBody()               {   return $("(//div[@class='message'])[1]")   }

    dropdownEmailContentFrom()          {   return $("//ion-select[@formcontrolname='from']")  }
    btnReply()                          {   return $("//ion-button[@qa-automation='email-reader-btn-reply']")  }
    btnReplyOptions()                   {   return $$("span[class='action-sheet-button-inner sc-ion-action-sheet-md']")  }


}
