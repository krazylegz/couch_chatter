function(doc) {
  var summary = (doc.html.replace(/<(.|\n)*?>/g, '').substring(0,350) + '...');
  emit(doc.created_at, {
    message : doc.message,
    author : doc.author,
    created_at : doc.created_at
  });
};
