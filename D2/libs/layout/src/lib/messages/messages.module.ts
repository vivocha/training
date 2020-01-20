import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ChatMessageComponent } from './chat-message/chat-message.component';
import { SystemMessageComponent } from './system-message/system-message.component';
import { TemplateGenericComponent } from './template-generic/template-generic.component';
import { QuickRepliesComponent } from './quick-replies/quick-replies.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { RequestMessageComponent } from './request-message/request-message.component';
import { LinkMessageComponent } from './link-message/link-message.component';
import { VvcLinkPipe } from './vvc-link.pipe';
import { VvcCommonModule } from './../common/vvc-common.module';

const components = [
  ChatMessageComponent,
  SystemMessageComponent,
  TemplateGenericComponent,
  TemplateListComponent,
  QuickRepliesComponent,
  RequestMessageComponent,
  LinkMessageComponent,
  VvcLinkPipe
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    VvcCommonModule
  ],
  exports: [...components],
  declarations: [...components]
})
export class MessagesModule { }
