function requireAuth(nextState, replaceState) {
    if (!auth.loggedIn())
      replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }