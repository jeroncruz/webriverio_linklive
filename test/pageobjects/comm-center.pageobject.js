
import { $ } from "@wdio/globals"
import BasePage from "../base/base.page"

export default class CommCenterPageObjects extends BasePage {
    
    btnDismiss()                       {   return $(`//ion-button[contains(text(),'Dismiss')]`)   }
    toastMsg()                         {   return $(`//ion-toast`)   }
    txtLoading()                       {   return $(`//ion-card-title[text()="Loading"]`)   }
    searchField()                      {   return $(`//input[@type='search']`)   }
    spanRevContactName(username)       {   return $(`//span[@class='rev-contact-name' and contains(text(), '${username}')]`)   }
    startMsgBtn()                      {   return $(`//ion-item[contains(text(), 'Start Messaging')]`)   }
    startVoiceCallBtn()                {   return $(`//ion-item[contains(text(), 'Start Voice Call')]`)   }

    txtContactName(username)           {   return $(`(//ion-label[contains(text(),'${username}')])[1]`)   }    
    divTimer()                         {   return $(`//span[contains(text(),'Timer:')]/parent::div`)   }    
    txtInternal()                      {   return $(`//ion-label/div/div[contains(text(),'Internal')]`)   }    

    sendSecureMailBtn()                {   return $(`//ion-item[contains(text(), 'Send Secure Mail')]`)   }
    toggleBtn()                        {   return $(`//ion-button[@qa-automation='session-list-btn-options-one-part']`)   }
    endConversationBtn()               {   return $(`//ion-item[text()='End Conversation']`)   }
    txtAreaChatMsgInput()              {   return $(`//div[@aria-label='Chat Message Input']`)   }
    btnSendMsg()                       {   return $(`//ion-button[@qa-automation='chat-btn-send-msg']`)   }

    // mobile view objects
    
    tabContactsMobileView()            {   return $(`//ion-router-outlet[@id='communicator-outlet']/app-tabs/ion-tabs/ion-tab-bar/ion-tab-button/ion-label[text()='Contacts']`)   }

}
