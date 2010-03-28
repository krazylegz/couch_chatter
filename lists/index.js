function(head, req) {
  // !json templates.index
  // !code vendor/couchapp/path.js
  // !code vendor/couchapp/date.js
  // !code vendor/couchapp/template.js

  var indexPath = listPath('index','messages',{descending:true, limit:5});

  provides("html", function() {
    send(template(templates.index, {
      index : indexPath,
      assets : assetPath()
    }));
  });
};
