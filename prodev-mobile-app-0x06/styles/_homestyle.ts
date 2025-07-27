import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  searchGroup: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  searchControl: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderRadius: 10,
    fontSize: 14,
  },
  searchButton: {
    marginLeft: 12,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#1e40af',
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterContainer: {
    width: 80,
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  listingContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  paginationContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});
