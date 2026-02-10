module.exports = {
  hooks: {
    readPackage(pkg) {
      // Override all sharp dependencies to use 0.33.5
      if (pkg.dependencies && pkg.dependencies.sharp) {
        pkg.dependencies.sharp = '0.33.5';
      }
      if (pkg.optionalDependencies && pkg.optionalDependencies.sharp) {
        pkg.optionalDependencies.sharp = '0.33.5';
      }
      return pkg;
    }
  }
};
