import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import VALIDATION_LABELS from 'src/config/validation.config';
import TitleControl from 'src/app/features/admin/controls/title.control';
import DescriptionControl from 'src/app/features/admin/controls/description.control';
import ImageControl from 'src/app/features/admin/controls/image.control';
import VideoControl from 'src/app/features/admin/controls/video.control';
import DateControl from 'src/app/features/admin/controls/date.control';

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

  ngOnInit(): void {
    this.createForm = new FormGroup({
      title: this.title.control,
      description: this.description.control,
      img: this.img.control,
      video: this.video.control,
      date: this.date.control,
    });
  }

  submitForm($event: SubmitEvent) {
    $event.preventDefault();

    const fields = this.createForm.value;

    // eslint-disable-next-line no-console
    console.log(fields);
  }
}
