function(doc) {
  if (doc.type == 'user') {
    for (key in doc._attachments) {
      emit(doc.name, {url: doc._id + '/' + key});
    }
  }
}
