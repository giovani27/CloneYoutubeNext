import { useContext } from 'react';
import SettingsContext from '../context/settingcontext';

const useSettings = () => useContext(SettingsContext);

export default useSettings;
