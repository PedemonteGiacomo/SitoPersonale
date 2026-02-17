import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { portfolioData, getUniqueProjectTags, filterProjectsByTag, searchProjects } from '../data/portfolio';

export function ProjectsPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const allTags = getUniqueProjectTags();
  
  // Filter projects based on search and tag
  const filteredProjects = React.useMemo(() => {
    let projects = portfolioData.projects;
    
    if (searchQuery) {
      projects = searchProjects(searchQuery);
    }
    
    if (selectedTag) {
      projects = filterProjectsByTag(selectedTag);
    }
    
    if (searchQuery && selectedTag) {
      projects = searchProjects(searchQuery).filter(project => 
        project.tags.includes(selectedTag)
      );
    }
    
    return projects;
  }, [searchQuery, selectedTag]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-neon-green mb-4 font-mono"
          >
            $ ls -la ~/projects
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            A collection of projects showcasing my skills in cloud computing, 
            DevOps, machine learning, and accessibility.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/50 transition-colors focus-ring"
            >
              <Filter className="w-5 h-5" />
              <span>Filter by Tag</span>
              {selectedTag && (
                <span className="px-2 py-1 bg-neon-green text-gray-950 rounded text-xs font-medium">
                  {selectedTag}
                </span>
              )}
            </button>
          </div>

          {/* Tag Filter */}
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-4"
            >
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    !selectedTag 
                      ? 'bg-neon-green text-gray-950' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  All
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      selectedTag === tag 
                        ? 'bg-neon-green text-gray-950' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Active Filters */}
          {(searchQuery || selectedTag) && (
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gray-400 text-sm">Active filters:</span>
              {searchQuery && (
                <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">
                  Search: "{searchQuery}"
                </span>
              )}
              {selectedTag && (
                <span className="px-2 py-1 bg-neon-green/20 text-neon-green rounded text-xs">
                  Tag: #{selectedTag}
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-gray-400 hover:text-red-400 transition-colors"
                title="Clear all filters"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-gray-400 text-sm"
        >
          Showing {filteredProjects.length} of {portfolioData.projects.length} projects
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-lg mb-4">
              No projects found matching your criteria
            </div>
            <button
              onClick={clearFilters}
              className="text-neon-green hover:text-neon-blue transition-colors"
            >
              Clear filters to see all projects
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}