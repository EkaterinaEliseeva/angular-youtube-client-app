import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import VALIDATION_LABELS from 'src/config/validation.config';
import TitleControl from 'src/app/features/admin/controls/title.control';
import DescriptionControl from 'src/app/features/admin/controls/description.control';
import ImageControl from 'src/app/features/admin/controls/image.control';
import VideoControl from 'src/app/features/admin/controls/video.control';
import DateControl from 'src/app/features/admin/controls/date.control';
import IAppStore from 'src/app/redux/store.model';
import customItemsAddAction from 'src/app/features/youtube/stores/custom-items/actions/custom-items.action';
import ICustomItem from 'src/app/features/youtube/stores/custom-items/custom-item.interface';
import CryptoUtil from 'src/utils/crypto.util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent implements OnInit {
  formActionName = 'Create new card';

  createForm!: FormGroup;

  labels = VALIDATION_LABELS;

  title = new TitleControl();

  description = new DescriptionControl();

  img = new ImageControl();

  video = new VideoControl();

  date = new DateControl();

  constructor(private readonly store: Store<IAppStore>) {
  }

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

    const fields = this.createForm.value as ICustomItem;

    this.store.dispatch(customItemsAddAction({
      payload: {
        ...fields,
        date: new Date(fields.date),
        id: await CryptoUtil.generateHash(fields.title + Date.now().toString()),
      },
    }));
  }
}
