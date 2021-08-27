export class SomeDemo{
  notes = ['Simple demo'];
  note = '';

  addNote = () : void => {
    this.notes.push(this.note);
    this.note = '';
  }
}