import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import {Observable} from 'rxjs/Observable';
import {Art} from './art';
import {AngularFirestore} from 'angularfire2/firestore';

const ARTS: Art[] = [
  { $key: '1', title: 'Narco', description: '', imgSrc: '', timeStamp: 1, active: true },
  { $key: '2',  title: 'Bombasto', description: '', imgSrc: '', timeStamp: 1, active: true  },
  { $key: '3',  title: 'Celeritas', description: '', imgSrc: '', timeStamp: 1, active: true  },
  { $key: '4',  title: 'Magneta', description: '', imgSrc: '', timeStamp: 1, active: true  },
  { $key: '5',  title: 'RubberMan', description: '', imgSrc: '', timeStamp: 1, active: true  },
  { $key: '6',  title: 'Dynama', description: '', imgSrc: '', timeStamp: 1, active: true  },
  { $key: '7',  title: 'Dr IQ', description: '', imgSrc: '', timeStamp: 1, active: true  },
  { $key: '8',  title: 'Magma', description: '', imgSrc: '', timeStamp: 1, active: true  },
  { $key: '9',  title: 'Tornado', description: '', imgSrc: '', timeStamp: 1, active: true  }
];

@Injectable()
export class ArtsService {

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) { }

  populateDb() {
    ARTS.forEach( art => {
            return this.addArt(art);
    });
  }
  addArt(art: Art) {
    // Persist a document id
    const id = this.afs.createId();
    console.log('generated-id: ' + id);
    art.$key = id;
    this.afs.collection('arts').add(art);
  }
  getArts(batch, lastKey?) {
    const queryFn = ref => {
      const query = ref.limit(batch).orderBy('$key'); /*.orderBy('$key')*/
      if (lastKey) {
        console.log('Last key: ' + lastKey);
        console.log('startAT');
        query.startAt(lastKey);
      }
      return query;
    };
    return this.afs.collection('arts', queryFn).valueChanges();
  }

}
