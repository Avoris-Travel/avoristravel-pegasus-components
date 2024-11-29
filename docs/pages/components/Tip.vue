<template>
    <Layout>
        <Markdown>
            # Tip
        </Markdown>

        <CodePreview :vertical="true">
            <AtTip icon="check-rounded"
                   title="Lorem ipsum dolor"
                   text="Malesuada potenti lacus magnis tempor euismod phasellus." />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtTip icon-align="right"
                   icon="check-rounded"
                   title="Lorem ipsum dolor"
                   text="Malesuada potenti lacus magnis tempor euismod phasellus." />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtTip icon-align="top"
                   icon="check-rounded"
                   title="Lorem ipsum dolor"
                   text="Malesuada potenti lacus magnis tempor euismod phasellus." />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtTip icon-align="bottom"
                   icon="check-rounded"
                   title="Lorem ipsum dolor"
                   text="Malesuada potenti lacus magnis tempor euismod phasellus." />
        </CodePreview>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Markdown from '@/components/Markdown/Markdown.vue'

    export default {
        components: {
            Layout,
            CodePreview,
            Markdown
        }
    }
</script>
