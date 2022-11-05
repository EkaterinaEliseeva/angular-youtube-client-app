import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import VALIDATION_LABELS from 'src/config/validation.config';
import TitleControl from 'src/app/features/admin/controls/title.control';
import DescriptionControl from 'src/app/features/admin/controls/description.control';
import ImageControl from 'src/app/features/admin/controls/image.control';
import VideoControl from 'src/app/features/admin/controls/video.control';
import DateControl from 'src/app/features/admin/controls/date.control';
import { Store } from '@ngrx/store';
import IAppStore from 'src/app/redux/store.model';
import CryptoUtil from 'src/utils/crypto.util';
import customItemsAddAction from 'src/app/features/youtube/stores/custom-items/actions/custom-items.action';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export default class CreateFormComponent implements OnInit {
  formActionName = 'Create new card';

  createForm!: FormGroup;

  labels = VALIDATION_LABELS;

  title = new TitleControl();

  description = new DescriptionControl();

  img = new ImageControl();

  video = new VideoControl();

  date = new DateControl();

  @Output() successfulAddedEvent = new EventEmitter<string>();

  constructor(private readonly store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.createForm = new FormGroup({
      title: this.title.control,
      description: this.description.control,
      img: this.img.control,
      video: this.video.control,
      date: this.date.control,
    });
  }

  async submitForm($event: SubmitEvent) {
    $event.preventDefault();
    const {
      title, description, img, video, date,
    } = this.createForm.value;

    const itemFields = {
      id: await CryptoUtil.generateHash(title + Date.now().toString()),
      date: new Date(date).toDateString(),
      title,
      description,
      source: video,
      preview: img,
      statistics: {
        viewCount: 0,
        likeCount: 0,
        favoriteCount: 0,
        commentCount: 0,
      },
      custom: true,
    };

    this.store.dispatch(customItemsAddAction({
      payload: itemFields,
    }));

    this.successfulAddedEvent.emit(itemFields.title);
  }
}
