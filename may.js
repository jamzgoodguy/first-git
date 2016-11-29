function replaceContentInContainer(target, source) {
      document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
   }
replaceContentInContainer('BlogArchive1', 'Profile1');
