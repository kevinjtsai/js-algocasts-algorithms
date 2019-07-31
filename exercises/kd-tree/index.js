


cdisp = 0; max_dist = 1; max_cars = 3;
checkDispatchDistance(free_cars, rider);

checkDispatchDistance = (ctree, dest) => {
  if (ctree == null || cdisp == max_cars) return;

  if (distance(ctree.loc, dest.loc) <= max_dist) {
    dispatch(ctree);
    cdisp++;
    checkDispatchDistance(ctree.left, dest);
  } else {
    checkDispatchDistance(ctree.right, dest);
  }
};



