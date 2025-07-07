declare module 'react-native-vector-icons/Ionicons' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  const Ionicons: ComponentType<IconProps>;
  export default Ionicons;
}

declare module 'react-native-vector-icons/AntDesign' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  const AntDesign: ComponentType<IconProps>;
  export default AntDesign;
}

declare module 'react-native-vector-icons/Feather' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  const Feather: ComponentType<IconProps>;
  export default Feather;
}

declare module 'react-native-vector-icons/FontAwesome' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  const FontAwesome: ComponentType<IconProps>;
  export default FontAwesome;
}

declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  const MaterialCommunityIcons: ComponentType<IconProps>;
  export default MaterialCommunityIcons;
}

declare module 'react-native-vector-icons/MaterialIcons' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  const MaterialIcons: ComponentType<IconProps>;
  export default MaterialIcons;
}
