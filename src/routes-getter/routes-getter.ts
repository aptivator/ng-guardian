import {roles} from '../_lib/vars';

export default function(roleName) {
  return roles[roleName].routes;
}
