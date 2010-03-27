function(doc) {
  if (doc.type == 'message') emit(doc.created_at, {message: doc.message, author: doc.author, created_at: doc.created_at});
}
