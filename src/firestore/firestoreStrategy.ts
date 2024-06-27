import {
  addDoc,
  collection,
  doc,
  type Firestore,
  setDoc
} from 'firebase/firestore'

interface FirestoreStrategy {
  trigger: (value: unknown) => unknown
}

class NoFire implements FirestoreStrategy {
  trigger(value: unknown) {
    return value
  }
}

export class SetDoc implements FirestoreStrategy {
  private db: Firestore
  private index: string
  private id: string

  constructor(db: Firestore, index: string, id: string) {
    this.db = db
    this.index = index
    this.id = id
  }

  async trigger(payload: unknown) {
    const newDoc = setDoc(doc(this.db, this.index, this.id), payload)
    return newDoc
  }
}

export class AddDoc implements FirestoreStrategy {
  private db: Firestore
  private index: string

  constructor(db: Firestore, index: string) {
    this.db = db
    this.index = index
  }

  async trigger(payload: unknown) {
    const newDoc = addDoc(collection(this.db, this.index), payload)
    return newDoc
  }
}

export class FirestoreProcessor {
  private FirestoreStrategy: FirestoreStrategy = new NoFire()

  public setStrategy(strategy: FirestoreStrategy): void {
    this.FirestoreStrategy = strategy
  }

  trigger(value: unknown): unknown {
    return this.FirestoreStrategy.trigger(value)
  }
}
