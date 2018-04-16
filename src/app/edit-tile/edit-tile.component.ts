import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

import { TileSelectService } from '../tools/services/tile-select.service';
import { TileSizeService } from '../tools/services/tile-size.service';
import { TileSize } from '../tools/shared/tile-size.model';
import { Tile } from '../tools/shared/tile.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-edit-tile',
  templateUrl: './edit-tile.component.html',
  styleUrls: ['./edit-tile.component.css']
})
export class EditTileComponent implements OnInit {

  tileForm: FormGroup;
  tileSizes: TileSize[] ;
  _id: string;
  _userid: string;
  editMode = false;
  selectedTile: Tile;
  fileExtensionWarning = false;
  maxSizeWarning = false;
  fileRequired = false;
  tilesFolderPath = '';


  public uploader: FileUploader  = new FileUploader({});  // --fs

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tileSizeService: TileSizeService,
              private tileService: TileSelectService,
              private authService: AuthService ) {  }

  ngOnInit() {
      this.tileSizes = this.tileSizeService.getTilesSize();
      this.tilesFolderPath = this.tileService.tilesFolderPath;
      this.route.params
      .subscribe(
        (params: Params) => {
          this._id = params['_id'];
          this.editMode = params['_id'] !== '0';
          const user = this.authService.getUser();
          if (user && user._id) {
            this._userid = user._id;
          }
          this.initForm();

        }
      );
  }

  private initForm() {

    let tileName = '';
    let tileSize = '';
    let tileDescription = '';
    let tileAvailability = 'Yes';
    let tilepath = '';
    if (this.editMode) {
      // Get selected tile
      this.selectedTile = this.tileService.getTileByID(this._id);
      tileName = this.selectedTile.name;
      tileSize = this.tileSizeService.getSizeIndexByDimension (this.selectedTile.width, this.selectedTile.height).toString();
      tileDescription = this.selectedTile.description;
      tileAvailability = this.selectedTile.availability;
      tilepath = this.selectedTile.path;
    }

    this.tileForm = new FormGroup({
      '_id': new FormControl(this._id, Validators.required),
      'name': new FormControl(tileName, Validators.required),
      'size': new FormControl(tileSize, Validators.required),
      'description': new FormControl(tileDescription),
      'availability': new FormControl(tileAvailability),
      'path': new FormControl(tilepath),
      '_userid': new FormControl(this._userid),
    });
  }

  onCancel() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onSubmit() {

    if (this.editMode) {
      this.tileService.updateTile(this._id, this.tileForm.value);
    } else {
      this.onUploadFile();
    }
    this.onCancel();
  }

  onUploadFile() {

    if (this.onUploadValidateFile()) {
      // this.uploader.setOptions({url: 'http://localhost:3000/upload/' + this.tileForm.value.name});
      this.uploader.setOptions({url: 'https://guarded-cove-17160.herokuapp.com/upload/' + this.tileForm.value.name});

      this.uploader.uploadAll();
      this.uploader.response.subscribe((res: any) => {
        const res1 = JSON.parse(res);
        if (res1) {
          if (res1.error_code === 0) {
            this.tileForm.value.path = res1.file_name;
            // Store form values in table
            this.tileService.addTile(this.tileForm.value);
          } else {
            alert('Error on Upload file: ' + res1.err_desc);
          }

        }
        return res;
      });
    }

  }

  onUploadValidateFile() {
    this.maxSizeWarning = false;
    this.fileExtensionWarning = false;
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
    let fileExt = '';

    if (this.uploader.getNotUploadedItems().length > 0) {

      fileExt = this.uploader.queue[0].file.name.split('.').pop();
      // Check the max size of file
      if (this.uploader.queue[0].file.size > 300000) {
        this.maxSizeWarning = true;
      }
      // Check the allowable file extension
      const foundExt = allowedExtensions.find((ext: string) => {
            return ext === fileExt.toLowerCase();
          });
      if (typeof(foundExt) === 'undefined' ) {
          this.fileExtensionWarning = true;
      }

      if ( this.maxSizeWarning || this.fileExtensionWarning ) {
        this.uploader.clearQueue();
        return false;
      } else {
        return true;
      }
    } else {
      this.fileRequired = true;
      return false;
    }

  }

  clearFileField(event) {
    this.uploader.clearQueue();
  }


}
