function(doc) {
  if (doc.type == 'user') emit(doc.name, {name: doc.name, avatar: doc.avatar});
}
