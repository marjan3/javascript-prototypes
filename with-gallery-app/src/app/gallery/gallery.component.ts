import {Component, OnInit} from '@angular/core';
import {ArtsService} from '../arts.service';
import * as _ from 'lodash';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  providers: [ArtsService]
})
export class GalleryComponent implements OnInit {
  batch = 20;
  lastKey: string;
  finished = false;
  arts = new BehaviorSubject([]);
  constructor(private artsService: ArtsService) {}
  ngOnInit() {
    this.artsService.populateDb();
    this.getArts();
  }
  onScroll () {
    console.log('scrolled!!');
    this.getArts();
  }
  private getArts(key?) {
    if (this.finished) {
      return;
    }
    this.artsService
      .getArts(this.batch + 1, this.lastKey)
      .do(arts => {
        /// set the lastKey in preparation for next query
        console.log(arts);
        this.lastKey = _.last(arts)['$key'];
        console.log('Last key: ' + this.lastKey);
        const newArts = _.slice(arts, 0, this.batch);
        console.log(newArts);
        /// Get current arts in BehaviorSubject
        const currentArts = this.arts.getValue();
        console.log(currentArts);
        /// If data is identical, stop making queries
        if (this.lastKey === _.last(newArts)['$key']) {
          this.finished = true;
        }
        /// Concatenate new arts to current movies
        this.arts.next( _.concat(currentArts, newArts) );
      })
      .take(1)
      .subscribe();
  }
}


