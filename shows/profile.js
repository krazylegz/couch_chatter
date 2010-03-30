function(doc, req) {
  // !json templates.profile
  // !code vendor/couchapp/path.js
  // !code vendor/couchapp/date.js
  // !code vendor/couchapp/template.js

  provides("html", function() {
    var avatars = new Array();
    for (key in doc._attachments) {
      avatars.push(doc._id + '/' + key);
    }
    return template(templates.profile, {
      name : doc.name,
      avatars : avatars,
      index : listPath('index', 'messages', {descending:true, limit: 30}),
      assets : assetPath()
    });
  });
}
