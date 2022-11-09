export interface State {
  frameworks: string[];
  isAuthenticated: boolean;
}

export const initialState: State = {
  frameworks: ['Aurelia', 'React', 'Angular'],
  isAuthenticated: false
};
