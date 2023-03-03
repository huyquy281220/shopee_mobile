import React, {useState, useCallback, ReactNode} from 'react';
import {ScrollView, RefreshControl} from 'react-native';

type ScrollViewProps = {
  children: ReactNode;
};

const ScrollToRefresh = ({children}: ScrollViewProps) => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
      }>
      {children}
    </ScrollView>
  );
};

export default ScrollToRefresh;
