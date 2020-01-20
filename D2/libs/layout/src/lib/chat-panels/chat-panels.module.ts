import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiPanelComponent } from './emoji-panel/emoji-panel.component';
import { UploadPanelComponent } from './upload-panel/upload-panel.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports:[EmojiPanelComponent, UploadPanelComponent],
  declarations: [EmojiPanelComponent, UploadPanelComponent]
})
export class ChatPanelsModule { }
